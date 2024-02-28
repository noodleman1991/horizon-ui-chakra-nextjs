// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: x1BtAZcYDoHQadMwGq1GLr
// Component: D7qJMaOYRZ5K

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: x1BtAZcYDoHQadMwGq1GLr/projectcss
import sty from "./PlasmicNewsCardLarge.module.css"; // plasmic-import: D7qJMaOYRZ5K/css

createPlasmicElementProxy;

export type PlasmicNewsCardLarge__VariantMembers = {};
export type PlasmicNewsCardLarge__VariantsArgs = {};
type VariantPropType = keyof PlasmicNewsCardLarge__VariantsArgs;
export const PlasmicNewsCardLarge__VariantProps = new Array<VariantPropType>();

export type PlasmicNewsCardLarge__ArgsType = {
  slot2?: React.ReactNode;
  children?: React.ReactNode;
  slot?: React.ReactNode;
};
type ArgPropType = keyof PlasmicNewsCardLarge__ArgsType;
export const PlasmicNewsCardLarge__ArgProps = new Array<ArgPropType>(
  "slot2",
  "children",
  "slot"
);

export type PlasmicNewsCardLarge__OverridesType = {
  root?: Flex__<"div">;
};

export interface DefaultNewsCardLargeProps {
  slot2?: React.ReactNode;
  children?: React.ReactNode;
  slot?: React.ReactNode;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicNewsCardLarge__RenderFunc(props: {
  variants: PlasmicNewsCardLarge__VariantsArgs;
  args: PlasmicNewsCardLarge__ArgsType;
  overrides: PlasmicNewsCardLarge__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const $translator = usePlasmicTranslator?.();
  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox___2PMsX)}>
        <div className={classNames(projectcss.all, sty.freeBox__p2RHp)}>
          {renderPlasmicSlot({
            defaultContents: (
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__fZwj1)}
                displayHeight={"100%"}
                displayMaxHeight={"none"}
                displayMaxWidth={"90%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"50%"}
                loading={"lazy"}
              />
            ),

            value: args.slot2
          })}
          <div className={classNames(projectcss.all, sty.freeBox__tJvcc)}>
            <div className={classNames(projectcss.all, sty.freeBox__eiZyy)}>
              {renderPlasmicSlot({
                defaultContents: <Trans__>{"Enter some text"}</Trans__>,
                value: args.children,
                className: classNames(sty.slotTargetChildren)
              })}
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__accuo)}>
              {renderPlasmicSlot({
                defaultContents: <Trans__>{"Enter some text"}</Trans__>,
                value: args.slot,
                className: classNames(sty.slotTargetSlot)
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNewsCardLarge__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNewsCardLarge__VariantsArgs;
    args?: PlasmicNewsCardLarge__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNewsCardLarge__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNewsCardLarge__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicNewsCardLarge__ArgProps,
          internalVariantPropNames: PlasmicNewsCardLarge__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNewsCardLarge__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNewsCardLarge";
  } else {
    func.displayName = `PlasmicNewsCardLarge.${nodeName}`;
  }
  return func;
}

export const PlasmicNewsCardLarge = Object.assign(
  // Top-level PlasmicNewsCardLarge renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicNewsCardLarge
    internalVariantProps: PlasmicNewsCardLarge__VariantProps,
    internalArgProps: PlasmicNewsCardLarge__ArgProps
  }
);

export default PlasmicNewsCardLarge;
/* prettier-ignore-end */
